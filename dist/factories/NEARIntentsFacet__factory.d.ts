import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { NEARIntentsFacet, NEARIntentsFacetInterface } from "../NEARIntentsFacet";
type NEARIntentsFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NEARIntentsFacet__factory extends ContractFactory {
    constructor(...args: NEARIntentsFacetConstructorParams);
    deploy(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<NEARIntentsFacet>;
    getDeployTransaction(_backendSigner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): NEARIntentsFacet;
    connect(signer: Signer): NEARIntentsFacet__factory;
    static readonly bytecode = "0x60a0604052348015600e575f5ffd5b50604051612378380380612378833981016040819052602b916061565b6001600160a01b0381166051576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b0316608052608c565b5f602082840312156070575f5ffd5b81516001600160a01b03811681146085575f5ffd5b9392505050565b6080516122d46100a45f395f610a2101526122d45ff3fe608060405260043610610033575f3560e01c80632225d1811461003757806371b31cc51461004c578063cc67a1aa1461005f575b5f5ffd5b61004a610045366004611df8565b6100c0565b005b61004a61005a366004611ebe565b610305565b34801561006a575f5ffd5b506100ac610079366004611f28565b5f9081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e602052604090205460ff1690565b604051901515815260200160405180910390f35b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0161013b576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155848261014b8282610570565b335f6101573447611f3f565b905088806101000151610196576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b89806101200151156101d4576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8a6101f78160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561022e576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361026b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102a8576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102b28c8a6106f2565b6102c68c5f01518d60c001518d8d33610aac565b60c08d01526102d58c8a610bee565b5047915050818111156102f6576102f65f846102f18585611f3f565b610d43565b50505f90935550505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610380576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815561038d83611f77565b826103988282610570565b335f6103a43447611f3f565b90506103af87611f77565b60a081015173ffffffffffffffffffffffffffffffffffffffff16610400576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f0361043d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e001510361047a576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61048388611f77565b806101000151156104c0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c989611f77565b80610120015115610506576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105186105128b611f77565b8a6106f2565b61053561052b60a08c0160808d01611f82565b8b60c00135610d73565b6105476105418b611f77565b8a610bee565b504791505081811115610563576105635f846102f18585611f3f565b50505f9093555050505050565b80355f9081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e602081905260409091205460ff16156105dc576040517f5908229b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b81604001354210610619576040517f8727a7f900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61062a6040840160208501611f82565b73ffffffffffffffffffffffffffffffffffffffff1603610677576040517f719201ae00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a083015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f11480156106b657506080820135155b156106ed576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050565b8060400135421115610730576040517f0819bdcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a08201515f9073ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f1146107875760a083015173ffffffffffffffffffffffffffffffffffffffff1661078d565b81608001355b835160c08501519192505f917f26e3f312476209e792e713eef13bd95c5da5292aba26e299c7d8e7c647d7903e9190846107cd6040880160208901611f82565b60e0898101516080808c015160408051602081019a909a52898101989098526060808a01979097529088019490945273ffffffffffffffffffffffffffffffffffffffff92831660a088015260c0870152911690840152908501356101008301528435610120830152840135610140820152610160016040516020818303038152906040528051906020012090505f61095f604080518082018252601881527f4c492e4649204e45415220496e74656e7473204661636574000000000000000060209182015281518083018352600181527f31000000000000000000000000000000000000000000000000000000000000009082015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527fdf98a75ee2bb051a05361ac569745cad98c226712c281987cdb39642864489ae818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b6040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281019190915260428101839052606201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152919052805160209091012090505f610a1d826109e460a0880188611fa2565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610e2792505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610aa4576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b5f82808203610ae7576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610af5600185611f3f565b818110610b0457610b0461200a565b9050602002810190610b169190612037565b610b27906080810190606001611f82565b90505f610b3382610ecb565b905073ffffffffffffffffffffffffffffffffffffffff8216610b5d57610b5a3482611f3f565b90505b5f610b688888610f15565b9050610b74888861101f565b610b818a8989898561108b565b5f82610b8c85610ecb565b610b969190611f3f565b905089811015610be0576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b80355f9081527fc2d2028e37697f276a6fb455a906325dd32709206edce48d1064013d5f9d2a1e6020819052604090912080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055608083015173ffffffffffffffffffffffffffffffffffffffff16610d16575f610c786040840160208501611f82565b73ffffffffffffffffffffffffffffffffffffffff168460c001516040515f6040518083038185875af1925050503d805f8114610cd0576040519150601f19603f3d011682016040523d82523d5f602084013e610cd5565b606091505b5050905080610d10576040517ff4b3b1bc00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50610d39565b6080830151610d3990610d2f6040850160208601611f82565b8560c00151610d43565b6106ed838361124d565b73ffffffffffffffffffffffffffffffffffffffff8316610d68576106ed8282611390565b6106ed8383836113fd565b805f03610dac576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610e055780341015610e01576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b610e0173ffffffffffffffffffffffffffffffffffffffff831633308461146b565b604051600190835f5260208301516040526040835103610e7b57604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610e9f565b6041835103610e9b5760608301515f1a6020526040830151606052610e9f565b5f91505b6020600160805f855afa5191503d610ebe57638baa579f5f526004601cfd5b5f60605260405292915050565b5f73ffffffffffffffffffffffffffffffffffffffff821615610f0d57610f0873ffffffffffffffffffffffffffffffffffffffff8316306114c3565b610f0f565b475b92915050565b6060815f8167ffffffffffffffff811115610f3257610f32611bc3565b604051908082528060200260200182016040528015610f5b578160200160208202803683370190505b5090505f5f5b8381101561101457868682818110610f7b57610f7b61200a565b9050602002810190610f8d9190612037565b610f9e906080810190606001611f82565b9150610fa982610ecb565b838281518110610fbb57610fbb61200a565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661100c5734838281518110610ff457610ff461200a565b602002602001018181516110089190611f3f565b9052505b600101610f61565b509095945050505050565b5f5b818110156106ed573683838381811061103c5761103c61200a565b905060200281019061104e9190612037565b905061106060e0820160c08301612073565b15611082576110826110786060830160408401611f82565b8260800135610d73565b50600101611021565b83838383825f5b8181101561123357368a8a838181106110ad576110ad61200a565b90506020028101906110bf9190612037565b90506110ee6110d46060830160408401611f82565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061115057506111506111076040830160208401611f82565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561116757506111676111076020830183611f82565b80156111ea57506111ea61117e60a0830183611fa2565b61118c916004915f9161208c565b611195916120b3565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611220576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61122a8c826114f6565b50600101611092565b5050611242848484845f611769565b505050505050505050565b61125d6040820160208301611f82565b8251608084015160c08501516040805173ffffffffffffffffffffffffffffffffffffffff938416815260208101929092528086013590820152921691833591907fabfaa867fe89bacdf772b7b4aa1700c6157ca41c551d443b5d81144aad19f7549060600160405180910390a47311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff16036113555760e08201518251604051608084013581527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f1826040516113849190612165565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff82166113dd576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e0173ffffffffffffffffffffffffffffffffffffffff831682611980565b73ffffffffffffffffffffffffffffffffffffffff821661144a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106ed73ffffffffffffffffffffffffffffffffffffffff84168383611999565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166114b657637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61150e6115066020830183611f82565b6017903b1190565b611544576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611583576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f6115976110d46060850160408601611f82565b6115a1575f6115a7565b82608001355b90505f6115c26115bd6080860160608701611f82565b610ecb565b9050815f036115f8576115f86115de6060860160408701611f82565b6115ee6040870160208801611f82565b86608001356119e2565b5f806116076020870187611f82565b73ffffffffffffffffffffffffffffffffffffffff168461162b60a0890189611fa2565b604051611639929190612278565b5f6040518083038185875af1925050503d805f8114611673576040519150601f19603f3d011682016040523d82523d5f602084013e611678565b606091505b50915091508161168b5761168b81611a0e565b5f61169f6115bd6080890160608a01611f82565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886116d060208a018a611f82565b6116e060608b0160408c01611f82565b6116f060808c0160608d01611f82565b8b60800135898711611702578661170c565b61170c8a88611f3f565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f8682611778600182611f3f565b8181106117875761178761200a565b90506020028101906117999190612037565b6117aa906080810190606001611f82565b90505f5f5f5f5f5f5f5b88811015611970576117c760018a611f3f565b811080156117d6575088600114155b156118b1578d8d828181106117ed576117ed61200a565b90506020028101906117ff9190612037565b611810906080810190606001611f82565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff16146118b1578a81815181106118575761185761200a565b602002602001015161186887610ecb565b6118729190611f3f565b965073ffffffffffffffffffffffffffffffffffffffff861615611896575f611898565b895b9350838711156118b1576118b1868d6102f1878b611f3f565b8d8d828181106118c3576118c361200a565b90506020028101906118d59190612037565b6118e6906060810190604001611f82565b94506118f185610ecb565b925073ffffffffffffffffffffffffffffffffffffffff851615611915575f611917565b895b9150818311801561195457508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561196857611968858d6102f18587611f3f565b6001016117b4565b5050505050505050505050505050565b5f385f3884865af1610e015763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166119d9576390b8ec185f526004601cfd5b5f603452505050565b6106ed8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611a18565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611b3f5773ffffffffffffffffffffffffffffffffffffffff8316611a81576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611af4573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b189190612287565b1015611b3f57611b3f73ffffffffffffffffffffffffffffffffffffffff85168483611b45565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166119d9575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166119d957633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611c1457611c14611bc3565b60405290565b5f82601f830112611c29575f5ffd5b813567ffffffffffffffff811115611c4357611c43611bc3565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f0116810167ffffffffffffffff81118282101715611c9057611c90611bc3565b604052818152838201602001851015611ca7575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611ce6575f5ffd5b919050565b80358015158114611ce6575f5ffd5b5f6101408284031215611d0b575f5ffd5b611d13611bf0565b823581529050602082013567ffffffffffffffff811115611d32575f5ffd5b611d3e84828501611c1a565b602083015250604082013567ffffffffffffffff811115611d5d575f5ffd5b611d6984828501611c1a565b604083015250611d7b60608301611cc3565b6060820152611d8c60808301611cc3565b6080820152611d9d60a08301611cc3565b60a082015260c0828101359082015260e08083013590820152611dc36101008301611ceb565b610100820152611dd66101208301611ceb565b61012082015292915050565b5f60c08284031215611df2575f5ffd5b50919050565b5f5f5f5f60608587031215611e0b575f5ffd5b843567ffffffffffffffff811115611e21575f5ffd5b611e2d87828801611cfa565b945050602085013567ffffffffffffffff811115611e49575f5ffd5b8501601f81018713611e59575f5ffd5b803567ffffffffffffffff811115611e6f575f5ffd5b8760208260051b8401011115611e83575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611ea6575f5ffd5b611eb287828801611de2565b91505092959194509250565b5f5f60408385031215611ecf575f5ffd5b823567ffffffffffffffff811115611ee5575f5ffd5b83016101408186031215611ef7575f5ffd5b9150602083013567ffffffffffffffff811115611f12575f5ffd5b611f1e85828601611de2565b9150509250929050565b5f60208284031215611f38575f5ffd5b5035919050565b81810381811115610f0f577f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610f0f3683611cfa565b5f60208284031215611f92575f5ffd5b611f9b82611cc3565b9392505050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112611fd5575f5ffd5b83018035915067ffffffffffffffff821115611fef575f5ffd5b602001915036819003821315612003575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612069575f5ffd5b9190910192915050565b5f60208284031215612083575f5ffd5b611f9b82611ceb565b5f5f8585111561209a575f5ffd5b838611156120a6575f5ffd5b5050820193919092039150565b80357fffffffff000000000000000000000000000000000000000000000000000000008116906004841015612112577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b60208152815160208201525f6020830151610140604084015261218c610160840182612119565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526121c78282612119565b91505060608401516121f1608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e084015161010084015261010084015161226061012085018215159052565b50610120840151801515610140850152509392505050565b818382375f9101908152919050565b5f60208284031215612297575f5ffd5b505191905056fea26469706673582212207539148e8001987533b02b6a7b0c90e6ecada7bd91aa83df0f5724c2adc89d0464736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_backendSigner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "isQuoteConsumed";
        readonly inputs: readonly [{
            readonly name: "_quoteId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "consumed";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaNEARIntents";
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
            readonly name: "_nearData";
            readonly type: "tuple";
            readonly internalType: "struct NEARIntentsFacet.NEARIntentsData";
            readonly components: readonly [{
                readonly name: "quoteId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaNEARIntents";
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
            readonly name: "_nearData";
            readonly type: "tuple";
            readonly internalType: "struct NEARIntentsFacet.NEARIntentsData";
            readonly components: readonly [{
                readonly name: "quoteId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositAddress";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "deadline";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "minAmountOut";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
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
        readonly type: "event";
        readonly name: "NEARIntentsBridgeStarted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "quoteId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "depositAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
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
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidDepositAddress";
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
        readonly name: "InvalidSignature";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeTransferFailed";
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
        readonly name: "QuoteAlreadyConsumed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "QuoteExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SignatureExpired";
        readonly inputs: readonly [];
    }];
    static createInterface(): NEARIntentsFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NEARIntentsFacet;
}
export {};
