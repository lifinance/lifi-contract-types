import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { MockVaultWrapper, MockVaultWrapperInterface } from "../MockVaultWrapper";
type MockVaultWrapperConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockVaultWrapper__factory extends ContractFactory {
    constructor(...args: MockVaultWrapperConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<MockVaultWrapper>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): MockVaultWrapper;
    connect(signer: Signer): MockVaultWrapper__factory;
    static readonly bytecode = "0x6080604052348015600e575f5ffd5b5061194b8061001c5f395ff3fe608060405234801561000f575f5ffd5b5060043610610269575f3560e01c80636f307dc311610157578063ba087652116100d2578063d505accf11610088578063dd62ed3e1161006e578063dd62ed3e146106b1578063ef8b30f7146106d9578063f90b13d4146106ec575f5ffd5b8063d505accf1461068b578063d905777e1461069e575f5ffd5b8063c6e6f592116100b8578063c6e6f59214610652578063ce96cb7714610665578063d3441de514610678575f5ffd5b8063ba0876521461063f578063c63d75b6146104b6575f5ffd5b806394bf804d11610127578063a9059cbb1161010d578063a9059cbb14610606578063b3d7f6b914610619578063b460af941461062c575f5ffd5b806394bf804d146105ba57806395d89b41146105cd575f5ffd5b80636f307dc31461054857806370a08231146105685780637ecebe001461058d5780638eb36e3d146105b2575f5ffd5b806323b872dd116101e757806338d52e0f116101b75780634cdad5061161019d5780634cdad506146104e95780636e553f65146104fc5780636ec520d41461050f575f5ffd5b806338d52e0f14610494578063402d267d146104b6575f5ffd5b806323b872dd1461038957806330521c5b1461039c578063313ce567146103bc5780633644e515146103d6575f5ffd5b8063095ea7b31161023c5780630f2da776116102225780630f2da77614610358578063158ef93e1461036d57806318160ddd14610379575f5ffd5b8063095ea7b3146103225780630a28a47714610345575f5ffd5b806301e1d1141461026d57806303eadcfc1461028857806306fdde03146102cd57806307a2d13a1461030f575b5f5ffd5b6102756106ff565b6040519081526020015b60405180910390f35b6002546102a89073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161027f565b60408051808201909152601281527f4d6f636b205661756c742057726170706572000000000000000000000000000060208201525b60405161027f91906112e7565b61027561031d3660046112f9565b61072c565b610335610330366004611338565b610770565b604051901515815260200161027f565b6102756103533660046112f9565b6107c0565b61036b610366366004611372565b6107f7565b005b5f546103359060ff1681565b6805345cdf77eb68f44c54610275565b61033561039736600461146e565b610934565b6003546102a89073ffffffffffffffffffffffffffffffffffffffff1681565b6103c46109ee565b60405160ff909116815260200161027f565b604080518082018252601281527f4d6f636b205661756c742057726170706572000000000000000000000000000060209182015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81527fa0741a5903aadaa9cff012bd46927d7441a5bd1d9cae2ff1e7b3127b6da9b610918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc69181019190915246606082015230608082015260a09020610275565b5f54610100900473ffffffffffffffffffffffffffffffffffffffff166102a8565b6102756104c43660046114a8565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90565b6102756104f73660046112f9565b6109fa565b61027561050a3660046114c1565b610a04565b6003546105359074010000000000000000000000000000000000000000900461ffff1681565b60405161ffff909116815260200161027f565b6001546102a89073ffffffffffffffffffffffffffffffffffffffff1681565b6102756105763660046114a8565b6387a211a2600c9081525f91909152602090205490565b61027561059b3660046114a8565b6338377508600c9081525f91909152602090205490565b610302610a1c565b6102756105c83660046114c1565b610aa8565b60408051808201909152600381527f6d565700000000000000000000000000000000000000000000000000000000006020820152610302565b610335610614366004611338565b610ac0565b6102756106273660046112f9565b610b37565b61027561063a3660046114eb565b610b64565b61027561064d3660046114eb565b610b9a565b6102756106603660046112f9565b610bd0565b6102756106733660046114a8565b610bfd565b610335610686366004611534565b610c1a565b61036b61069936600461154d565b610c4d565b6102756106ac3660046114a8565b610e24565b6102756106bf3660046115b3565b602052637f5e9f20600c9081525f91909152603490205490565b6102756106e73660046112f9565b610e3d565b6105356106fa366004611534565b610e47565b5f805461072790610100900473ffffffffffffffffffffffffffffffffffffffff1630610e7f565b905090565b5f610739565b9392505050565b5f610732836107466106ff565b610751906001611608565b61076b6107656805345cdf77eb68f44c5490565b60010190565b610eb2565b5f82602052637f5e9f20600c52335f52816034600c2055815f52602c5160601c337f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560205fa35060015b92915050565b5f6107cb565b610f5f565b5f610732836107e16805345cdf77eb68f44c5490565b6107ec906001611608565b6107c66107656106ff565b5f5460ff1615610833576040517f0dc149f000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460017fffffffffffffffffffffff00000000000000000000000000000000000000000090911661010073ffffffffffffffffffffffffffffffffffffffff8c81169190910291909117821790925580547fffffffffffffffffffffffff00000000000000000000000000000000000000009081168a84161790915560028054909116888316179055600380549187167fffffffffffffffffffff00000000000000000000000000000000000000000000909216919091177401000000000000000000000000000000000000000061ffff8716021790558260056109198282611687565b50600490506109298284836117b9565b505050505050505050565b5f8360601b33602052637f5e9f208117600c526034600c2080546001810115610972578085111561096c576313be252b5f526004601cfd5b84810382555b50506387a211a28117600c526020600c2080548085111561099a5763f4d678b85f526004601cfd5b84810382555050835f526020600c208381540181555082602052600c5160601c8160601c7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602080a3505060019392505050565b5f6107275f60126118cf565b5f6107ba8261072c565b5f610a0e83610e3d565b90506107ba33838584610f99565b60048054610a2990611724565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5590611724565b8015610aa05780601f10610a7757610100808354040283529160200191610aa0565b820191905f5260205f20905b815481529060010190602001808311610a8357829003601f168201915b505050505081565b5f610ab283610b37565b90506107ba33838386610f99565b5f6387a211a2600c52335f526020600c20805480841115610ae85763f4d678b85f526004601cfd5b83810382555050825f526020600c208281540181555081602052600c5160601c337fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602080a350600192915050565b5f5f61073283610b456106ff565b610b50906001611608565b6107c66107656805345cdf77eb68f44c5490565b5f610b6e82610bfd565b841115610b8257610b8263936941fc610f90565b610b8b846107c0565b9050610732338484878561100a565b5f610ba482610e24565b841115610bb857610bb8634656425a610f90565b610bc1846109fa565b9050610732338484848861100a565b5f5f61073283610be76805345cdf77eb68f44c5490565b610bf2906001611608565b61076b6107656106ff565b6387a211a2600c9081525f8281526020909120546107ba9061072c565b5f600660ff831660048110610c3157610c316118e8565b602081049091015460ff601f9092166101000a90041692915050565b60408051808201909152601281527f4d6f636b205661756c74205772617070657200000000000000000000000000006020909101527fa0741a5903aadaa9cff012bd46927d7441a5bd1d9cae2ff1e7b3127b6da9b61084421115610cb857631a15a3cc5f526004601cfd5b6040518860601b60601c98508760601b60601c975065383775081901600e52885f526020600c2080547f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f83528360208401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6604084015246606084015230608084015260a08320602e527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c983528a60208401528960408401528860608401528060808401528760a084015260c08320604e526042602c205f528660ff16602052856040528460605260208060805f60015afa8b3d5114610dc05763ddafbaef5f526004601cfd5b019055777f5e9f20000000000000000000000000000000000000000088176040526034602c2087905587897f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925602060608501a360405250505f606052505050505050565b6387a211a2600c9081525f8281526020909120546107ba565b5f6107ba82610bd0565b5f600560ff831660048110610e5e57610e5e6118e8565b601091828204019190066002029054906101000a900461ffff169050919050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b82820281838583041485151702610f58577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8385098181108201900382848609835f038416828511610f0b5763ae47f7025f526004601cfd5b93849004938382119092035f839003839004600101029203041760026003830281188084028203028084028203028084028203028084028203028084028203028084029091030202610732565b0492915050565b5f610f6b848484610eb2565b9050818385091561073257600101806107325763ae47f7025f526004601cfd5b505050565b805f526004601cfd5b5f54610fc290610100900473ffffffffffffffffffffffffffffffffffffffff168530856110bc565b610fcc8382611114565b815f52806020525f1960601c8381168582167fdcbc1c05240f31ff3ad067ef1ee35ce4997762752e3a095284754544f4c709d760405fa35050505050565b8273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461104857611048838683611190565b61105283826111d1565b5f5461107a90610100900473ffffffffffffffffffffffffffffffffffffffff168584611252565b815f52806020525f1960601c8381168582168783167ffbde797d201c681b91056529119e0b02407c7bb96a4a2c75c01fc9667232c8db60405fa4505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f5114171661110757637939f4245f526004601cfd5b5f60605260405250505050565b6805345cdf77eb68f44c54818101818110156111375763e5cfe9575f526004601cfd5b806805345cdf77eb68f44c5550506387a211a2600c52815f526020600c208181540181555080602052600c5160601c5f7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602080a35050565b81602052637f5e9f20600c52825f526034600c20805460018101156111ca57808311156111c4576313be252b5f526004601cfd5b82810382555b5050505050565b6387a211a2600c52815f526020600c208054808311156111f85763f4d678b85f526004601cfd5b82900390556805345cdf77eb68f44c805482900390555f81815273ffffffffffffffffffffffffffffffffffffffff83167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef602083a35050565b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611292576390b8ec185f526004601cfd5b5f603452505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f610732602083018461129b565b5f60208284031215611309575f5ffd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611333575f5ffd5b919050565b5f5f60408385031215611349575f5ffd5b61135283611310565b946020939093013593505050565b61ffff8116811461136f575f5ffd5b50565b5f5f5f5f5f5f5f5f888a036101c081121561138b575f5ffd5b6113948a611310565b98506113a260208b01611310565b97506113b060408b01611310565b96506113be60608b01611310565b955060808a01356113ce81611360565b94506101007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6082011215611400575f5ffd5b5060a0890192506101a089013567ffffffffffffffff811115611421575f5ffd5b8901601f81018b13611431575f5ffd5b803567ffffffffffffffff811115611447575f5ffd5b8b6020828401011115611458575f5ffd5b989b979a50959850939692959194602001935050565b5f5f5f60608486031215611480575f5ffd5b61148984611310565b925061149760208501611310565b929592945050506040919091013590565b5f602082840312156114b8575f5ffd5b61073282611310565b5f5f604083850312156114d2575f5ffd5b823591506114e260208401611310565b90509250929050565b5f5f5f606084860312156114fd575f5ffd5b8335925061150d60208501611310565b915061151b60408501611310565b90509250925092565b803560ff81168114611333575f5ffd5b5f60208284031215611544575f5ffd5b61073282611524565b5f5f5f5f5f5f5f60e0888a031215611563575f5ffd5b61156c88611310565b965061157a60208901611310565b9550604088013594506060880135935061159660808901611524565b9699959850939692959460a0840135945060c09093013592915050565b5f5f604083850312156115c4575f5ffd5b6115cd83611310565b91506114e260208401611310565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b808201808211156107ba576107ba6115db565b600184111561165257808504811115611636576116366115db565b600184161561164457908102905b60019390931c92800261161b565b935093915050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b815f805b60048110156116ca575f83356116a081611360565b6020949094019361ffff600484901b81811b1995909516911690931b92909217915060010161168b565b50825550608082015f805b6004811015611717575f833580151581146116ee575f5ffd5b6020949094019360ff600384901b81811b1995909516911690931b9290921791506001016116d5565b5080600184015550505050565b600181811c9082168061173857607f821691505b60208210810361176f577f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b50919050565b601f821115610f8b57805f5260205f20601f840160051c8101602085101561179a5750805b601f840160051c820191505b818110156111ca575f81556001016117a6565b67ffffffffffffffff8311156117d1576117d161165a565b6117e5836117df8354611724565b83611775565b5f601f841160018114611835575f85156117ff5750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b1783556111ca565b5f838152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08716915b828110156118825786850135825560209485019460019092019101611862565b50868210156118bd577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555050505050565b60ff81811683821601908111156107ba576107ba6115db565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffdfea26469706673582212200606c5ddaf22548243270a36bd74e00e254ad8efd875f96c8e44cbaf54d53ccd64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "function";
        readonly name: "DOMAIN_SEPARATOR";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "adapter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "allowance";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "approve";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "asset";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "balanceOf";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "convertToAssets";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "convertToShares";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "decimals";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "deposit";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "feeEnabled";
        readonly inputs: readonly [{
            readonly name: "_feeType";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "feeRate";
        readonly inputs: readonly [{
            readonly name: "_feeType";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initData";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "initialize";
        readonly inputs: readonly [{
            readonly name: "_asset";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_underlying";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_adapter";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_vaultWrapperAdmin";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_integratorShareBps";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }, {
            readonly name: "_fees";
            readonly type: "tuple";
            readonly internalType: "struct FeeConfig";
            readonly components: readonly [{
                readonly name: "rateBps";
                readonly type: "uint16[4]";
                readonly internalType: "uint16[4]";
            }, {
                readonly name: "enabled";
                readonly type: "bool[4]";
                readonly internalType: "bool[4]";
            }];
        }, {
            readonly name: "_initData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "initialized";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "integratorShareBps";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint16";
            readonly internalType: "uint16";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxDeposit";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "maxAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxMint";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "maxShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxRedeem";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "maxShares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "maxWithdraw";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "maxAssets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "mint";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "name";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "nonces";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "permit";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "deadline";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "v";
            readonly type: "uint8";
            readonly internalType: "uint8";
        }, {
            readonly name: "r";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "s";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "previewDeposit";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewMint";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewRedeem";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "previewWithdraw";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "redeem";
        readonly inputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "symbol";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "string";
            readonly internalType: "string";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "totalAssets";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "totalSupply";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "result";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "transfer";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "transferFrom";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "underlying";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "vaultWrapperAdmin";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "withdraw";
        readonly inputs: readonly [{
            readonly name: "assets";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "shares";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "Approval";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "spender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Deposit";
        readonly inputs: readonly [{
            readonly name: "by";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Transfer";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Withdraw";
        readonly inputs: readonly [{
            readonly name: "by";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "owner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "assets";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "shares";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "AllowanceOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AllowanceUnderflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "AlreadyInitialized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "DepositMoreThanMax";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientAllowance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidPermit";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "MintMoreThanMax";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "PermitExpired";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "RedeemMoreThanMax";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "TotalSupplyOverflow";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawMoreThanMax";
        readonly inputs: readonly [];
    }];
    static createInterface(): MockVaultWrapperInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): MockVaultWrapper;
}
export {};
