import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetV4, AcrossFacetV4Interface } from "../AcrossFacetV4";
type AcrossFacetV4ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetV4__factory extends ContractFactory {
    constructor(...args: AcrossFacetV4ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetV4>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetV4;
    connect(signer: Signer): AcrossFacetV4__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b506040516200227e3803806200227e83398101604081905262000034916200007f565b6001600160a01b038216158062000049575080155b1562000068576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0390911660805260a052620000bb565b600080604083850312156200009357600080fd5b82516001600160a01b0381168114620000ab57600080fd5b6020939093015192949293505050565b60805160a051612182620000fc6000396000818160a40152610948015260008181610105015281816108fd015281816109fb0152610a2601526121826000f3fe6080604052600436106100655760003560e01c8063e796cd9811610043578063e796cd98146100d9578063f6503992146100f3578063f97136af1461014c57600080fd5b80631794958f1461006a578063a1f1ce431461007f578063d999984d14610092575b600080fd5b61007d610078366004611aa0565b610168565b005b61007d61008d366004611b5f565b6103b2565b34801561009e57600080fd5b506100c67f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b3480156100e557600080fd5b506100c6651f2abb7bf89b81565b3480156100ff57600080fd5b506101277f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100d0565b34801561015857600080fd5b506100c6670de0b6b3a764000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101e3576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006101f43447611bf2565b905086806101000151610233576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876102568160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561028d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036102cb576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610308576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61031d89600001518a60c001518a8a3361059f565b60c08a0152600061032d87611c39565b9050670de0b6b3a764000061034860c0890160a08a01611d06565b6fffffffffffffffffffffffffffffffff168b60c001516103699190611d28565b6103739190611d3f565b60808201526103828a826106e6565b5047915050818111156103a4576103a460008461039f8585611bf2565b610b31565b505060009091555050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161042d576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061043e3447611bf2565b9050846104638160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561049a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036104d8576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610515576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610553576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61056587608001518860c00151610b66565b6105778761057288611c39565b6106e6565b50479050818111156105935761059360008461039f8585611bf2565b50506000909155505050565b6000828082036105db576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856105ea600185611bf2565b8181106105f9576105f9611d7a565b905060200281019061060b9190611da9565b61061c906080810190606001611de7565b9050600061062982610c1b565b905073ffffffffffffffffffffffffffffffffffffffff8216610653576106503482611bf2565b90505b600061065f8888610c66565b905061066b8888610d7a565b6106788a89898985610de7565b60008261068485610c1b565b61068e9190611bf2565b9050898110156106d8576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b6101208201516101408201515115159015151461072f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600061073e8360e00151610fb6565b90507311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168360a0015173ffffffffffffffffffffffffffffffffffffffff16036108045781516107c3576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e0830151835183516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a36108a1565b8261012001511580156108325750815160a084015173ffffffffffffffffffffffffffffffffffffffff1614155b15610869576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81516108a1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60208201516108dc576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608083015173ffffffffffffffffffffffffffffffffffffffff166109f1577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c68460c00151846020015185600001517f000000000000000000000000000000000000000000000000000000000000000087606001518960c001518960800151898b60c001518c60e001518d61010001518e61012001518f61014001516040518e63ffffffff1660e01b81526004016109ba9c9b9a99989796959493929190611e66565b6000604051808303818588803b1580156109d357600080fd5b505af11580156109e7573d6000803e3d6000fd5b5050505050610af5565b610a2483608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610fdc565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663ad5425c683602001518460000151856040015186606001518860c001518860800151888a60c001518b60e001518c61010001518d61012001518e61014001516040518d63ffffffff1660e01b8152600401610ac29c9b9a99989796959493929190611e66565b600060405180830381600087803b158015610adc57600080fd5b505af1158015610af0573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f183604051610b249190611edf565b60405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b5b57610b568282611008565b505050565b610b56838383611075565b80600003610ba0576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610bf95780341015610bf5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610bf573ffffffffffffffffffffffffffffffffffffffff83163330846110e3565b600073ffffffffffffffffffffffffffffffffffffffff821615610c5e57610c5973ffffffffffffffffffffffffffffffffffffffff831630611140565b610c60565b475b92915050565b60608160008167ffffffffffffffff811115610c8457610c84611846565b604051908082528060200260200182016040528015610cad578160200160208202803683370190505b5090506000805b83811015610d6f57868682818110610cce57610cce611d7a565b9050602002810190610ce09190611da9565b610cf1906080810190606001611de7565b9150610cfc82610c1b565b838281518110610d0e57610d0e611d7a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610d5f5734838281518110610d4757610d47611d7a565b60200260200101818151610d5b9190611bf2565b9052505b610d6881611ff2565b9050610cb4565b509095945050505050565b60005b81811015610b565736838383818110610d9857610d98611d7a565b9050602002810190610daa9190611da9565b9050610dbc60e0820160c0830161202a565b15610dde57610dde610dd46060830160408401611de7565b8260800135610b66565b50600101610d7d565b838383838260005b81811015610f9b57368a8a83818110610e0a57610e0a611d7a565b9050602002810190610e1c9190611da9565b9050610e4b610e316060830160408401611de7565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610eae5750610eae610e646040830160208401611de7565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610ec55750610ec5610e646020830183611de7565b8015610f4a5750610f4a610edc60a0830183612045565b610eeb916004916000916120b1565b610ef4916120db565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610f80576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610f8a8c82611175565b50610f9481611ff2565b9050610def565b5050610fab8484848460006113f2565b505050505050505050565b6000660416edef1601be8203610fd35750651f2abb7bf89b919050565b5090565b919050565b610b568383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611618565b73ffffffffffffffffffffffffffffffffffffffff8216611055576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610bf573ffffffffffffffffffffffffffffffffffffffff831682611747565b73ffffffffffffffffffffffffffffffffffffffff82166110c2576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b5673ffffffffffffffffffffffffffffffffffffffff84168383611763565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c52602060006064601c6000895af13d15600160005114171661113257637939f4246000526004601cfd5b600060605260405250505050565b6000816014526f70a0823100000000000000000000000060005260208060246010865afa601f3d111660205102905092915050565b61118d6111856020830183611de7565b6017903b1190565b6111c3576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611203576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611218610e316060850160408601611de7565b611223576000611229565b82608001355b905060006112456112406080860160608701611de7565b610c1b565b90508160000361127c5761127c6112626060860160408701611de7565b6112726040870160208801611de7565b8660800135610fdc565b60008061128c6020870187611de7565b73ffffffffffffffffffffffffffffffffffffffff16846112b060a0890189612045565b6040516112be929190612123565b60006040518083038185875af1925050503d80600081146112fb576040519150601f19603f3d011682016040523d82523d6000602084013e611300565b606091505b50915091508161131357611313816117b2565b60006113286112406080890160608a01611de7565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388861135960208a018a611de7565b61136960608b0160408c01611de7565b61137960808c0160608d01611de7565b8b6080013589871161138b5786611395565b6113958a88611bf2565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b8360008682611402600182611bf2565b81811061141157611411611d7a565b90506020028101906114239190611da9565b611434906080810190606001611de7565b905060008060008060008060005b888110156116085761145560018a611bf2565b81108015611464575088600114155b15611540578d8d8281811061147b5761147b611d7a565b905060200281019061148d9190611da9565b61149e906080810190606001611de7565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611540578a81815181106114e5576114e5611d7a565b60200260200101516114f687610c1b565b6115009190611bf2565b965073ffffffffffffffffffffffffffffffffffffffff861615611525576000611527565b895b93508387111561154057611540868d61039f878b611bf2565b8d8d8281811061155257611552611d7a565b90506020028101906115649190611da9565b611575906060810190604001611de7565b945061158085610c1b565b925073ffffffffffffffffffffffffffffffffffffffff8516156115a55760006115a7565b895b915081831180156115e457508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b156115f8576115f8858d61039f8587611bf2565b61160181611ff2565b9050611442565b5050505050505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156117415773ffffffffffffffffffffffffffffffffffffffff8316611681576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156116f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061171a9190612133565b10156117415761174173ffffffffffffffffffffffffffffffffffffffff851684836117bc565b50505050565b60003860003884865af1610bf55763b12d13eb6000526004601cfd5b81601452806034526fa9059cbb00000000000000000000000060005260206000604460106000875af13d1560016000511417166117a8576390b8ec186000526004601cfd5b6000603452505050565b8051602082018181fd5b81601452806034526f095ea7b300000000000000000000000060005260206000604460106000875af13d1560016000511417166117a85760006034526f095ea7b3000000000000000000000000600052600038604460106000875af1508060345260206000604460106000875af13d1560016000511417166117a857633e3f8f736000526004601cfd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561189957611899611846565b60405290565b604051610160810167ffffffffffffffff8111828210171561189957611899611846565b600082601f8301126118d457600080fd5b813567ffffffffffffffff808211156118ef576118ef611846565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810190828211818310171561193557611935611846565b8160405283815286602085880101111561194e57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610fd757600080fd5b80358015158114610fd757600080fd5b600061014082840312156119b557600080fd5b6119bd611875565b905081358152602082013567ffffffffffffffff808211156119de57600080fd5b6119ea858386016118c3565b60208401526040840135915080821115611a0357600080fd5b50611a10848285016118c3565b604083015250611a226060830161196e565b6060820152611a336080830161196e565b6080820152611a4460a0830161196e565b60a082015260c082013560c082015260e082013560e0820152610100611a6b818401611992565b90820152610120611a7d838201611992565b9082015292915050565b60006101608284031215611a9a57600080fd5b50919050565b60008060008060608587031215611ab657600080fd5b843567ffffffffffffffff80821115611ace57600080fd5b611ada888389016119a2565b95506020870135915080821115611af057600080fd5b818701915087601f830112611b0457600080fd5b813581811115611b1357600080fd5b8860208260051b8501011115611b2857600080fd5b602083019550809450506040870135915080821115611b4657600080fd5b50611b5387828801611a87565b91505092959194509250565b60008060408385031215611b7257600080fd5b823567ffffffffffffffff80821115611b8a57600080fd5b611b96868387016119a2565b93506020850135915080821115611bac57600080fd5b50611bb985828601611a87565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610c6057610c60611bc3565b80356fffffffffffffffffffffffffffffffff81168114610fd757600080fd5b803563ffffffff81168114610fd757600080fd5b60006101608236031215611c4c57600080fd5b611c5461189f565b8235815260208301356020820152604083013560408201526060830135606082015260808301356080820152611c8c60a08401611c05565b60a082015260c083013560c0820152611ca760e08401611c25565b60e0820152610100611cba818501611c25565b90820152610120611ccc848201611c25565b908201526101408381013567ffffffffffffffff811115611cec57600080fd5b611cf8368287016118c3565b918301919091525092915050565b600060208284031215611d1857600080fd5b611d2182611c05565b9392505050565b8082028115828204841417610c6057610c60611bc3565b600082611d75577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112611ddd57600080fd5b9190910192915050565b600060208284031215611df957600080fd5b611d218261196e565b6000815180845260005b81811015611e2857602081850181015186830182015201611e0c565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60006101808e83528d60208401528c60408401528b60608401528a60808401528960a08401528860c08401528760e084015263ffffffff8088166101008501528087166101208501528086166101408501525080610160840152611ecc81840185611e02565b9f9e505050505050505050505050505050565b602081528151602082015260006020830151610140806040850152611f08610160850183611e02565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152611f438382611e02565b9250506060850151611f6d608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e0850151610100818187015280870151915050610120611fe08187018315159052565b90950151151593019290925250919050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361202357612023611bc3565b5060010190565b60006020828403121561203c57600080fd5b611d2182611992565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261207a57600080fd5b83018035915067ffffffffffffffff82111561209557600080fd5b6020019150368190038213156120aa57600080fd5b9250929050565b600080858511156120c157600080fd5b838611156120ce57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561211b5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561214557600080fd5b505191905056fea2646970667358221220b5adf1680a63f86fed90044fd61c40727f953a9331205f8a7f681851cb89cebe64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ACROSS_CHAIN_ID_SOLANA";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "MULTIPLIER_BASE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "SPOKEPOOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WRAPPED_NATIVE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV4";
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
            readonly name: "_acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetV4Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetV4;
}
export {};
