import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GardenFacet, GardenFacetInterface } from "../GardenFacet";
type GardenFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GardenFacet__factory extends ContractFactory {
    constructor(...args: GardenFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GardenFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GardenFacet;
    connect(signer: Signer): GardenFacet__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061210d8061001c5f395ff3fe608060405260043610610033575f3560e01c8063191c635d146100375780634c6802cd1461004c578063bfd525211461005f575b5f5ffd5b61004a610045366004611bce565b61007e565b005b61004a61005a366004611c1a565b6102a3565b34801561006a575f5ffd5b5061004a610079366004611cc7565b6104cb565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100f9576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101093447611d38565b90508461012e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610165576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036101a2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036101df576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561021d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561025b576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61026d88608001518960c00151610826565b61027788886108da565b504791505081811115610298576102985f846102938585611d38565b610bf8565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161031e576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f61032e3447611d38565b90508680610100015161036d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103ab576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886103ce8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610405576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610442576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361047f576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104938a5f01518b60c001518b8b33610c2d565b60c08b01526104a28a886108da565b5047915050818111156104be576104be5f846102938585611d38565b50505f9091555050505050565b6104d3610d6f565b7f439718ca0f4911be80768871df062f8d0602092c4dfbc308316a6a7bb165de795f5b828110156107f8575f84848381811061051157610511611d70565b90506060020160200160208101906105299190611d9d565b73ffffffffffffffffffffffffffffffffffffffff1603610576576040517f7985228200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f84848381811061058957610589611d70565b90506060020160400160208101906105a19190611dea565b60018111156105b2576105b2611dbd565b1480156105fc57505f8484838181106105cd576105cd611d70565b6105e39260206060909202019081019150611d9d565b73ffffffffffffffffffffffffffffffffffffffff1614155b15610633576040517f7985228200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b604051806060016040528085858481811061065057610650611d70565b90506060020160200160208101906106689190611d9d565b73ffffffffffffffffffffffffffffffffffffffff16815260200185858481811061069557610695611d70565b90506060020160400160208101906106ad9190611dea565b60018111156106be576106be611dbd565b81526001602090910152825f8686858181106106dc576106dc611d70565b6106f29260206060909202019081019150611d9d565b73ffffffffffffffffffffffffffffffffffffffff908116825260208083019390935260409091015f208351815492167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178255928401519092909183917fffffffffffffffffffffff00000000000000000000000000000000000000000090911617740100000000000000000000000000000000000000008360018111156107a0576107a0611dbd565b02179055506040919091015181549015157501000000000000000000000000000000000000000000027fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff9091161790556001016104f6565b506040517fa97046ed741fcd62bae23b5b46f3bbd2b2225f2d91e778f47693bc2f060d45cb905f90a1505050565b805f0361085f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166108b857803410156108b4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6108b473ffffffffffffffffffffffffffffffffffffffff8316333084610de4565b60808201517f439718ca0f4911be80768871df062f8d0602092c4dfbc308316a6a7bb165de79905f9073ffffffffffffffffffffffffffffffffffffffff161561092857836080015161092a565b5f5b73ffffffffffffffffffffffffffffffffffffffff8181165f9081526020858152604080832081516060810190925280549485168252949550919391929083019074010000000000000000000000000000000000000000900460ff16600181111561099757610997611dbd565b60018111156109a8576109a8611dbd565b815290547501000000000000000000000000000000000000000000900460ff161515602090910152604081015190915015806109f95750805173ffffffffffffffffffffffffffffffffffffffff16155b15610a30576040517f981a2a2b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80515f82602001516001811115610a4957610a49611dbd565b03610af95760c086015160a08701516040517f13d4a78700000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff9182166024820152873560448201526064810183905260208801356084820152908316916313d4a7879160a4015f604051808303818588803b158015610add575f5ffd5b505af1158015610aef573d5f5f3e3d5ffd5b5050505050610bb9565b610b0f8660800151835f01518860c00151610e3c565b60a086015160c08701516040517f13d4a78700000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff928316602482015287356044820152606481019190915260208701356084820152908216906313d4a787905f9060a4015f604051808303818588803b158015610ba1575f5ffd5b505af1158015610bb3573d5f5f3e3d5ffd5b50505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f186604051610be89190611e54565b60405180910390a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610c2257610c1d8282610e68565b505050565b610c1d838383610ed5565b5f82808203610c68576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610c76600185611d38565b818110610c8557610c85611d70565b9050602002810190610c979190611f67565b610ca8906080810190606001611d9d565b90505f610cb482610f43565b905073ffffffffffffffffffffffffffffffffffffffff8216610cde57610cdb3482611d38565b90505b5f610ce98888610f8d565b9050610cf58888611097565b610d028a89898985611103565b5f82610d0d85610f43565b610d179190611d38565b905089811015610d61576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b7fc8fcad8db84d3cc18b4c41d551ea0ee66dd599cde068d998e57d5e09332c131c6004015473ffffffffffffffffffffffffffffffffffffffff163314610de2576040517f277d76f800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610e2f57637939f4245f526004601cfd5b5f60605260405250505050565b610c1d8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6112c5565b73ffffffffffffffffffffffffffffffffffffffff8216610eb5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6108b473ffffffffffffffffffffffffffffffffffffffff8316826113f2565b73ffffffffffffffffffffffffffffffffffffffff8216610f22576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610c1d73ffffffffffffffffffffffffffffffffffffffff8416838361140b565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f8557610f8073ffffffffffffffffffffffffffffffffffffffff831630611454565b610f87565b475b92915050565b6060815f8167ffffffffffffffff811115610faa57610faa611999565b604051908082528060200260200182016040528015610fd3578160200160208202803683370190505b5090505f5f5b8381101561108c57868682818110610ff357610ff3611d70565b90506020028101906110059190611f67565b611016906080810190606001611d9d565b915061102182610f43565b83828151811061103357611033611d70565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216611084573483828151811061106c5761106c611d70565b602002602001018181516110809190611d38565b9052505b600101610fd9565b509095945050505050565b5f5b81811015610c1d57368383838181106110b4576110b4611d70565b90506020028101906110c69190611f67565b90506110d860e0820160c08301611fa3565b156110fa576110fa6110f06060830160408401611d9d565b8260800135610826565b50600101611099565b83838383825f5b818110156112ab57368a8a8381811061112557611125611d70565b90506020028101906111379190611f67565b905061116661114c6060830160408401611d9d565b73ffffffffffffffffffffffffffffffffffffffff161590565b806111c857506111c861117f6040830160208401611d9d565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b80156111df57506111df61117f6020830183611d9d565b801561126257506112626111f660a0830183611fbc565b611204916004915f91612024565b61120d9161204b565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611298576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6112a28c82611487565b5060010161110a565b50506112ba848484845f6116fa565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156113ec5773ffffffffffffffffffffffffffffffffffffffff831661132e576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156113a1573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113c591906120b1565b10156113ec576113ec73ffffffffffffffffffffffffffffffffffffffff85168483611911565b50505050565b5f385f3884865af16108b45763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f5114171661144b576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61149f6114976020830183611d9d565b6017903b1190565b6114d5576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611514576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61152861114c6060850160408601611d9d565b611532575f611538565b82608001355b90505f61155361154e6080860160608701611d9d565b610f43565b9050815f036115895761158961156f6060860160408701611d9d565b61157f6040870160208801611d9d565b8660800135610e3c565b5f806115986020870187611d9d565b73ffffffffffffffffffffffffffffffffffffffff16846115bc60a0890189611fbc565b6040516115ca9291906120c8565b5f6040518083038185875af1925050503d805f8114611604576040519150601f19603f3d011682016040523d82523d5f602084013e611609565b606091505b50915091508161161c5761161c8161198f565b5f61163061154e6080890160608a01611d9d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861166160208a018a611d9d565b61167160608b0160408c01611d9d565b61168160808c0160608d01611d9d565b8b60800135898711611693578661169d565b61169d8a88611d38565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611709600182611d38565b81811061171857611718611d70565b905060200281019061172a9190611f67565b61173b906080810190606001611d9d565b90505f5f5f5f5f5f5f5b888110156119015761175860018a611d38565b81108015611767575088600114155b15611842578d8d8281811061177e5761177e611d70565b90506020028101906117909190611f67565b6117a1906080810190606001611d9d565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611842578a81815181106117e8576117e8611d70565b60200260200101516117f987610f43565b6118039190611d38565b965073ffffffffffffffffffffffffffffffffffffffff861615611827575f611829565b895b93508387111561184257611842868d610293878b611d38565b8d8d8281811061185457611854611d70565b90506020028101906118669190611f67565b611877906060810190604001611d9d565b945061188285610f43565b925073ffffffffffffffffffffffffffffffffffffffff8516156118a6575f6118a8565b895b915081831180156118e557508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156118f9576118f9858d6102938587611d38565b600101611745565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f5114171661144b575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f5114171661144b57633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff811182821017156119ea576119ea611999565b60405290565b5f82601f8301126119ff575f5ffd5b813567ffffffffffffffff811115611a1957611a19611999565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611a6657611a66611999565b604052818152838201602001851015611a7d575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611abc575f5ffd5b919050565b80358015158114611abc575f5ffd5b5f6101408284031215611ae1575f5ffd5b611ae96119c6565b823581529050602082013567ffffffffffffffff811115611b08575f5ffd5b611b14848285016119f0565b602083015250604082013567ffffffffffffffff811115611b33575f5ffd5b611b3f848285016119f0565b604083015250611b5160608301611a99565b6060820152611b6260808301611a99565b6080820152611b7360a08301611a99565b60a082015260c0828101359082015260e08083013590820152611b996101008301611ac1565b610100820152611bac6101208301611ac1565b61012082015292915050565b5f60408284031215611bc8575f5ffd5b50919050565b5f5f60608385031215611bdf575f5ffd5b823567ffffffffffffffff811115611bf5575f5ffd5b611c0185828601611ad0565b925050611c118460208501611bb8565b90509250929050565b5f5f5f5f60808587031215611c2d575f5ffd5b843567ffffffffffffffff811115611c43575f5ffd5b611c4f87828801611ad0565b945050602085013567ffffffffffffffff811115611c6b575f5ffd5b8501601f81018713611c7b575f5ffd5b803567ffffffffffffffff811115611c91575f5ffd5b8760208260051b8401011115611ca5575f5ffd5b60209190910193509150611cbc8660408701611bb8565b905092959194509250565b5f5f60208385031215611cd8575f5ffd5b823567ffffffffffffffff811115611cee575f5ffd5b8301601f81018513611cfe575f5ffd5b803567ffffffffffffffff811115611d14575f5ffd5b856020606083028401011115611d28575f5ffd5b6020919091019590945092505050565b81810381811115610f87577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f60208284031215611dad575f5ffd5b611db682611a99565b9392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f60208284031215611dfa575f5ffd5b813560028110611db6575f5ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f60208301516101406040840152611e7b610160840182611e08565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016060850152611eb68282611e08565b9150506060840151611ee0608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e0840151610100840152610100840151611f4f61012085018215159052565b50610120840151801515610140850152509392505050565b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611f99575f5ffd5b9190910192915050565b5f60208284031215611fb3575f5ffd5b611db682611ac1565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611fef575f5ffd5b83018035915067ffffffffffffffff821115612009575f5ffd5b60200191503681900382131561201d575f5ffd5b9250929050565b5f5f85851115612032575f5ffd5b8386111561203e575f5ffd5b5050820193919092039150565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156120aa577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f602082840312156120c1575f5ffd5b5051919050565b818382375f910190815291905056fea26469706673582212206ea997f8c212435cd61074819bb8134ef8a059330d80114ac27787afaa0cad6f64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "initGarden";
        readonly inputs: readonly [{
            readonly name: "configs";
            readonly type: "tuple[]";
            readonly internalType: "struct GardenFacet.InitConfig[]";
            readonly components: readonly [{
                readonly name: "assetAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "htlcAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "assetType";
                readonly type: "uint8";
                readonly internalType: "enum GardenFacet.AssetType";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGarden";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_gardenData";
            readonly type: "tuple";
            readonly internalType: "struct GardenFacet.GardenData";
            readonly components: readonly [{
                readonly name: "timelock";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "secretHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGarden";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_gardenData";
            readonly type: "tuple";
            readonly internalType: "struct GardenFacet.GardenData";
            readonly components: readonly [{
                readonly name: "timelock";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "secretHash";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "GardenInitialized";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AssetNotSupported";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidGardenConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyContractOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): GardenFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GardenFacet;
}
export {};
